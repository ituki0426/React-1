 var list = [];

  var data = [
    { text: "1" },
    { text: "2" }
  ];

  for(var i in data){
    list.push(<li>{data[i].text}</li>);
  }

  return(
    <ul>
      {list}
    </ul>
  );
}
