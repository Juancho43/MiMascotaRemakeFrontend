export const forumEndpoint = {
  'all': '/forums',
  'new': '/forums/create',
  'edit': '/forums/edit',
  'delete': (id : string)=>`/forums/delete/${id}`,
  'getPosts':(slug : string, page : number, limit : number)=>`/forums/${slug}/${page}/${limit}`,
  'getPostsByLocation':(slug : string, locationId: string ,page : number, limit : number)=>`/forums/${slug}/${locationId}/${page}/${limit}`,
  'getBySlug':(slug: string) => `/forums/${slug}`,
  'deleteImage' : '/forums/delete/image',
  'addImage' : '/forums/add/image',

}
