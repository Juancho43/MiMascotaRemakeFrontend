export const contactRequestEndpoint = {
  'getByOwner' : (id : string) => `/contactRequest/get/owner/${id}`,
  'getByRequester' : (id : string) => `/contactRequest/get/requester/${id}`,
  'create' : '/contactRequest/create',
  'resolve' : '/contactRequest/resolve',
  'status' : '/contactRequest/status',
}
