const express = require('express');
const usersroute = require('./routes/usersroutes');
const blogsRoute = require('./routes/blogsroutes');
const adminroute = require('./routes/adminroutes')
const paymentroute = require('./routes/paymentsroutes')
const packagesRoute = require('./routes/packagesroute')
const analyticsRoute = require('./routes/analytics')
const otpRoute = require('./routes/otproute')
const otpemail = require('./routes/otpemail')
const app = express();

app.use(express.json());
app.use('/users', usersroute);
app.use('/blogs', blogsRoute);
app.use('/admin', adminroute);
app.use('/payment',paymentroute)
app.use('/analytics', analyticsRoute);
app.use('/otp', otpRoute);
app.use('/otpemail', otpemail);
app.use('/packages', packagesRoute)

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});