module.exports = {
  date: () => {
    let date = new Date();
    date.setDate(date.getDate() + Math.round((Math.random() * 50) - 20));
    return date;
  }
};