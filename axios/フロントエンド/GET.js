axios.get('/user?ID=12345')
  .then(function (response) {
 // handle success(axiosの処理が成功した場合に処理させたいことを記述)
    console.log(response);
  })
  .catch(function (error) {
 // handle error(axiosの処理にエラーが発生した場合に処理させたいことを記述)
    console.log(error);
  })
  .finally(function () {
 // always executed(axiosの処理結果によらずいつも実行させたい処理を記述)
  });
