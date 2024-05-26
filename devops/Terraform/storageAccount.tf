resource "azurerm_storage_account" "cloudresumechallenge_storageaccount" {
  name                     = "${var.appname}_${var.env}storage"
  resource_group_name      = azurerm_resource_group.cloudresumechallenge_resourcegroup.name
  location                 = azurerm_resource_group.cloudresumechallenge_resourcegroup.location
  account_tier             = "Standard"
  account_kind             = "StorageV2"
  account_replication_type = "LRS"
}


resource "azurerm_storage_table" "cloudresumechallenge_counter_table" {
  name                 = var.counterTableName
  storage_account_name = azurerm_storage_account.cloudresumechallenge_storageaccount.name
}

resource "azurerm_storage_table" "cloudresumechallenge_project_table" {
  name                 = var.projectTableName
  storage_account_name = azurerm_storage_account.cloudresumechallenge_storageaccount.name
}

resource "azurerm_storage_table_entity" "cloudresumechallenge_counter_table_entity" {
  storage_table_id = azurerm_storage_table.cloudresumechallenge_counter_table.id
  partition_key    = "counter"
  row_key          = "counter"
  entity = {
    visits = 0
  }
}
