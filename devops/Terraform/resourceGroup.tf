// create a resource group with name cloudresumechallenge_env where env is an environment variable

resource "azurerm_resource_group" "cloudresumechallenge_resourcegroup" {
  name     = "${var.appname}_${var.env}"
  location = var.location
  tags     = local.tags
}
