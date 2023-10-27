const evaluationRouter = (app) => {
  // Create a 'GET' request.
  app.get('/msg', (req, res) => {
    setTimeout(() => {
      res.type('application/json');
      res.send({
        msg: 'success',
        data: {
          title: 'Hello,Programmer!!',
          decription: 'A example for testing react-router'
        }
      });
    }, 3000);
    //   res.status(401).send("Don't have access.");
  });

  app.get('/query', (req, res) => {
    res.status(401).send("Don't have access.");
  });
};

export default evaluationRouter;
