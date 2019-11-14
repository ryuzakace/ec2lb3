'use strict';

module.exports = function(Blog) {
  // Blog.beforeRemote('fetchBlogs', async (ctx) => {
  //   // const model = Model.name;
  //   console.log('Zeehahaha!', ctx.req.headers);
  //   if (ctx.req.headers.x != '2'){
  //       let e = {}
  //       e.statusCode = 400;
  //       e.name = 'Invalid Data Sent - OTP#1';
  //       throw e;
  //
  //   }
  // });
  /**
   *
   * @param {number} limit
   * @param {Function(Error)} callback
   */

  Blog.beforeRemote('*', async (ctx, next) => {
    // const model = Model.name;
    console.log(`-------------------------------------------Universal Mixin Fn Call: ${ctx.methodString}`);
  });


  Blog.beforeRemote('addBlog', async (ctx) => {
    // const model = Model.name;
    console.log(Buffer.from('luffy' + ':' + 'pirateking').toString('base64'));
    try{



    if (Buffer.from(ctx.req.headers.authorization.split(" ")[1], 'base64').toString() !== 'luffy:pirateking'){
      let e ={};
      e.statusCode = 401;
        e.name = 'Unauthorized Request';
        throw e;

    }}catch(e){
      e.statusCode = 401;
      e.name = 'Unauthorized Request';
      e.message = 'This operation is permitted only to authorised user'
      throw e;
    }
  });
  Blog.beforeRemote('putBlog', async (ctx) => {
    // const model = Model.name;
    console.log(Buffer.from('luffy' + ':' + 'pirateking').toString('base64'));
    try{



      if (Buffer.from(ctx.req.headers.authorization.split(" ")[1], 'base64').toString() !== 'luffy:pirateking'){
        let e ={};
        e.statusCode = 401;
        e.name = 'Unauthorized Request';
        throw e;

      }}catch(e){
      e.statusCode = 401;
      e.name = 'Unauthorized Request';
      e.message = 'This operation is permitted only to authorised user'
      throw e;
    }
  });
  Blog.beforeRemote('deleteBlog', async (ctx) => {
    // const model = Model.name;
    console.log(Buffer.from('luffy' + ':' + 'pirateking').toString('base64'));
    try{



      if (Buffer.from(ctx.req.headers.authorization.split(" ")[1], 'base64').toString() !== 'luffy:pirateking'){
        let e ={};
        e.statusCode = 401;
        e.name = 'Unauthorized Request';
        throw e;

      }}catch(e){
      e.statusCode = 401;
      e.name = 'Unauthorized Request';
      e.message = 'This operation is permitted only to authorised user'
      throw e;
    }
  });


  Blog.fetchBlogs = async function(limit=0) {
    // TODO
    console.log('here');
    console.log(limit);
    const xx = await Blog.find({limit: limit, fields: {name:true, createdAt:true, id:true}});
    console.log(xx);
    return xx;
  };

  /**
   *
   * @param {string} name
   * @param {string} content
   * @param {Function(Error)} callback
   */

  Blog.addBlog = async function(name, content) {
    // TODO return correct responses
    let invalidData = false;
    try{
    if(typeof(name) !== typeof('ryuk') || typeof(content) !== typeof('ryuk') || !name || !content){
      invalidData = true
    }
    }catch (e) {
      invalidData = true;
    }
    console.log(invalidData);
    console.log(name, content);
    if(invalidData){
        let e = {};
        e.statusCode = 400;
        e.message = 'Invalid/Missing Input';
        throw e;
    }else{
    const xx =  await Blog.create({
      name,
      content,
      createdAt: Date.now()
    });
    return xx.id;}
  };

  /**
   * update a blog using blogId
   * @param {Function(Error)} callback
   */

  Blog.putBlog = async function(id, name, content) {
    // TODO validate inputs like post + responses
    let invalidData = false;
    try{
      if(typeof(name) !== typeof('ryuk') || typeof(content) !== typeof('ryuk') || !name || !content){
        invalidData = true
      }
    }catch (e) {
      invalidData = true;
    }
    console.log(invalidData);
    console.log(name, content);
    if(invalidData){
      let e = {};
      e.statusCode = 400;
      e.message = 'Invalid/Missing Input';
      throw e;
    }else{
      const resp = await Blog.replaceById(id, {name, content, createdAt : Date.now()});
      return resp;
    }
  };

  /**
   * delete blog by its id
   * @param {number} id blogId
   * @param {Function(Error)} callback
   */

  Blog.deleteBlog = async function(id) {
    // TODO
  const resp =  await Blog.deleteById(id);
  console.log(resp);
  return resp.count;
  };

  /**
   * find blogs by id
   * @param {number} id
   * @param {Function(Error)} callback
   */

  Blog.findBlogById = async function(id) {
    // TODO
    const resp = await Blog.findById(id);
    console.log(id);
    if(resp){
    return resp;}else{
      let e = {};
      e.statusCode = 404;
      e.message = 'not found';
      throw e;

    }
  };






  Blog.disableRemoteMethodByName('replaceOrCreate', true);
  Blog.disableRemoteMethodByName('find', true);
  Blog.disableRemoteMethodByName('patchOrCreate', true);
  Blog.disableRemoteMethodByName('exists', true)
  Blog.disableRemoteMethodByName('prototype.patchAttributes', true);
  Blog.disableRemoteMethodByName('count', true);
  Blog.disableRemoteMethodByName('createChangeStream', true);
  Blog.disableRemoteMethodByName('prototype.patchAttributes', true);
  Blog.disableRemoteMethodByName('updateAll', true);
  Blog.disableRemoteMethodByName('findOne', true);
  Blog.disableRemoteMethodByName('upsertWithWhere', true);
  Blog.disableRemoteMethodByName('replaceById', true);
  Blog.disableRemoteMethodByName('create', true);
  Blog.disableRemoteMethodByName('deleteById', true);
  Blog.disableRemoteMethodByName('findById', true);


};
