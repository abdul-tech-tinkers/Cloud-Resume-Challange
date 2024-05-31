resource "azurerm_application_insights" "cloudresumechallange_applicationinsight" {
  name                = "${var.appname}${var.env}appinsight"
  location            = azurerm_resource_group.cloudresumechallenge_resourcegroup.location
  resource_group_name = azurerm_resource_group.cloudresumechallenge_resourcegroup.name
  application_type    = "web"
}
