resource "azurerm_management_lock" "azurerm_management_lock" {
  name       = "lock"
  scope      = azurerm_storage_account.cloudresumechallenge_storageaccount.id
  lock_level = "CanNotDelete"
}
