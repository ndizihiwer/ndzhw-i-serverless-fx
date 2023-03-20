export default (req, res) => {
  if (req.method === 'GET') {
    return res.json({
      name: 'NDIZIHIWE Regis',
      bio: 'Software developer and Graphic designer, student  at @RwCodingAcademy',
      email: 'ndizihiweregis06@gmail.coom',
      contacts: {
        instagram: 'ndzhwr_',
        twitter: 'ndzhwr',
      },
    });
  } else {
    return res.json({
      status: 404,
      message: `Canno ${req.method}`,
      success: false,
    });
  }
};
