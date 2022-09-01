const mongoose = require("mongoose");

exports.connect = () => {
  try {
    mongoose.connect(
      "mongodb+srv://Muthukumarathulyaliving:20pjw5NTsrcLpgJ2@labtest.ypstsds.mongodb.net/?retryWrites=true&w=majority",
      { useNewUrlParser: true, useUnifiedTopology: true }
    );
    console.log("MongoDB connected");
  } catch (err) {
    console.log(err);
    process.exit();
  }
};
