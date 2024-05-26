resource "azurerm_service_plan" "cloudresumechallenge_appserviceplan" {
  name                = "${var.appname}_${var.env}appserviceplan"
  location            = azurerm_resource_group.cloudresumechallenge_resourcegroup.location
  resource_group_name = azurerm_resource_group.cloudresumechallenge_resourcegroup.name
  os_type             = "Linux"
  sku_name            = "Y1"
  tags                = local.tags
}

resource "azurerm_linux_function_app" "cloudresumechallenge_functionapp" {
  name                = "${var.appname}_${var.env}functionapp"
  location            = azurerm_resource_group.cloudresumechallenge_resourcegroup.location
  resource_group_name = azurerm_resource_group.cloudresumechallenge_resourcegroup.name

  storage_account_name       = azurerm_storage_account.cloudresumechallenge_storageaccount.name
  service_plan_id            = azurerm_service_plan.cloudresumechallenge_appserviceplan.id
  storage_account_access_key = azurerm_storage_account.cloudresumechallenge_storageaccount.primary_access_key

  site_config {
    application_stack {
      dotnet_version = local.dotnetversion
    }
  }

  identity {
    type = "SystemAssigned"
  }
}