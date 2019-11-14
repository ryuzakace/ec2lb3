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
    console.log('Zeehahaha!', ctx.req.headers);
    try{
    if (ctx.req.headers.x != '2'){
        let e = {};
        e.statusCode = 400;
        e.name = 'Invalid Data Sent - OTP#1';
        throw e;

    }}catch(e){
      throw e;
    }
  });


  Blog.fetchBlogs = async function(limit=0) {
    // TODO
    console.log('here');
    console.log(limit);
    const xx = await Blog.find({limit: limit});
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
    // TODO
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
    const xx =  await Blog.create({
      name,
      content,
      createdAt: new Date()
    });
    return xx.id;
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

};
