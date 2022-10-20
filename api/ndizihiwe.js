export default (req, res) => {
  if (req.method === 'GET') {
    return res.json({
      name: 'NDIZIHIWE Regis',
      bio: 'Junior software developer studying at Rwanda Coding Academy ',
      email: 'ndizihiweregis06@gmail.coom',
      contacts: {
        instagram: 'rxxcs.ui',
        twitter: 'ndizihiwe_r',
      },
    });
  } else {
    return res.json({
      status: 404,
      message: 'Inncorrect http method',
      sucess: false,
    });
  }
};
