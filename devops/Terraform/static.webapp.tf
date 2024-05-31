resource "azurerm_static_web_app" "cloudresumechallange_staicsite" {
  name                = "${var.appname}${var.env}staticsite"
  location            = "eastasia"
  resource_group_name = azurerm_resource_group.cloudresumechallenge_resourcegroup.name
  sku_tier            = "Free"
  sku_size            = "Free"
}


