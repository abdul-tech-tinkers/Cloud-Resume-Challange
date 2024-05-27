using System.Net;
using System.Text;
using System.Text.Json;
using Microsoft.Azure.Functions.Worker;
using Microsoft.Azure.Functions.Worker.Http;
using Moq;
using Moq.Protected;

public class MockHttpClientFactory
{
    public static IHttpClientFactory Create(string name, MockHttpResponse response)
    {
        return Create(name, new List<MockHttpResponse> { response });
    }


    public static IHttpClientFactory Create(string name, List<MockHttpResponse> responses)
    {
                    
        Mock<HttpMessageHandler> messageHandler = SendAsyncHandler(responses);

        var mockHttpClientFactory = new Mock<IHttpClientFactory>();

        mockHttpClientFactory
            .Setup(x => x.CreateClient(name))
            .Returns(new HttpClient(messageHandler.Object)
            {
                BaseAddress = new Uri("https://mockdomain.mock")
            });

        return mockHttpClientFactory.Object;
    }


    private static Mock<HttpMessageHandler> SendAsyncHandler(List<MockHttpResponse> responses)
    {
        var messageHandler = new Mock<HttpMessageHandler>(MockBehavior.Strict);

        foreach(var response in responses)
        {
            messageHandler
                .Protected()
                .Setup<Task<HttpResponseMessage>>("SendAsync",
                    ItExpr.Is<HttpRequestMessage>(r => r.RequestUri!.PathAndQuery == response.UrlPart),
                    ItExpr.IsAny<CancellationToken>())
                .ReturnsAsync(new HttpResponseMessage
                {
                    StatusCode = response.StatusCode,
                    Content = (response.Response?.GetType() == typeof(string)
                        ? new StringContent(response.Response?.ToString() ?? "")
                        : new StringContent(JsonSerializer.Serialize(response.Response)))
                })
                .Verifiable();
        }               

        return messageHandler;
    }
}

public class MockHttpResponse
{
    public MockHttpResponse()
    {           
    }

    public MockHttpResponse(string urlPart, object response, HttpStatusCode statusCode)
    {
        this.UrlPart = urlPart;
        this.Response = response;
        this.StatusCode = statusCode;
    }


    public string UrlPart { get; set; } = String.Empty;

    public object Response { get; set; } = default!;

    public HttpStatusCode StatusCode { get; set; } = HttpStatusCode.OK;
}

public class MockHttpRequestData
{ 
    public static HttpRequestData Create()
    {
        return Create<string>("");
    }   
    

    public static HttpRequestData Create<T>(T requestData) where T : class
    {
        //var serviceCollection = new ServiceCollection();
        //serviceCollection.AddFunctionsWorkerDefaults();

        var serializedData = JsonSerializer.Serialize(requestData);
        var bodyDataStream = new MemoryStream(Encoding.UTF8.GetBytes(serializedData));

        var context = new Mock<FunctionContext>();
        //context.SetupProperty(context => context.InstanceServices, serviceCollection.BuildServiceProvider());

        var request = new Mock<HttpRequestData>(context.Object);
        request.Setup(r => r.Body).Returns(bodyDataStream);
        request.Setup(r => r.CreateResponse()).Returns(new MockHttpResponseData(context.Object));

        return request.Object;
    }
}

public class MockHttpResponseData : HttpResponseData
{
    public MockHttpResponseData(FunctionContext functionContext) : base(functionContext)
    {           
    }
    

    public override HttpStatusCode StatusCode { get; set; } = HttpStatusCode.OK;

    public override HttpHeadersCollection Headers { get; set; } = new HttpHeadersCollection();

    public override Stream Body { get; set; } = new MemoryStream();

    public override HttpCookies Cookies { get; }
}