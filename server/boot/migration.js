module.exports = async function (app) {
  console.log('running');
    const { datasources: { db } } = app;
    await db.autoupdate();

};
