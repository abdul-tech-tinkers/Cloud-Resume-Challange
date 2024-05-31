output "crcfunctionname" {
  value       = azurerm_linux_function_app.cloudresumechallenge_functionapp.name
  description = "value of the function app name"
  sensitive   = false
}

output "staicwebappkey" {
  value       = azurerm_static_web_app.cloudresumechallange_staicsite.api_key
  description = "value of the storage account access key"
  sensitive   = true
}
