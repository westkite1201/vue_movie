// 서버 => express (express생성)
// express라이브러리 로드 
let express=require('express')
// 서버 생성 
let app=express();
// 서버구동 
app.listen(3355,function(){
	console.log("서버 구동 완료","http://localhost:3355")
})
/*
    app.get("/",function(req,res){
	res.send("Hello Node...")
    })
*/
app.all('/*', function(req, res, next) {
  res.header("Access-Control-Allow-Origin", "*");
  res.header("Access-Control-Allow-Headers", "X-Requested-With");
  next();
});
app.get("/",(req,res)=>{
	res.send("Hello Node...")
})

// 라이브러리 로딩 
let Client=require('mongodb').MongoClient;
/*
	 MongoClient : Connection
	 db   => database (mydb)
	 collection => table (recipe,chef,chef_detail,recipe_detail,today )
*/
app.get('/movie_list',(req,res)=>{
	console.log("movie_list") 
	let url = "mongodb://localhost:27017"
	let page = req.query.page;
	let rowSize = 20;
	let skip = ( page * rowSize ) - rowSize;
	/*
		1page => 5
		   0~4
		2page => 5
		   5~9
	*/
	//  getParameter("page")  => /recipe?page=2
	// 접속
	Client.connect(url,(err,client)=>{
		// 데이터베이스 => mydb
		var db=client.db('mydb');
		// table(collection)에서 데이터를 읽기
		db.collection('movie').find({}).skip(skip).limit(rowSize).toArray(function(err,docs){
			console.log(docs);
			res.json(docs);
			client.close();
		})
	})
})

app.get('/movie_detail',(req,res)=>{
	// 몽고디비와 연결
	var url='mongodb://localhost:27017';
	/*
	    params:{
					mno:_this.mno
			}
	*/
	let mno=req.query.mno;// 문자열 
	Client.connect(url,(err,client)=>{
		// 데이터베이스 => mydb
		var db=client.db('mydb');
		console.log(mno)
		// table(collection)에서 데이터를 읽기
		db.collection('movie').find({mno:parseInt(mno)}).toArray(function(err,docs){
			console.log(docs);
			res.json(docs);
			client.close();
		})
	})
})

var xml2js=require('xml2js');
var request=require('request');
app.get('/news',function(req,res){
   var query=encodeURIComponent(req.query.fd);
   // encode => never서버 decode(한글)
   var url="http://newssearch.naver.com/search.naver?where=rss&query="+query;
   var parser=new xml2js.Parser();
   request.get({url:url},function(err,request,xml){
	   console.log(xml);
	   parser.parseString(xml,function(err,pJson){
		   //console.log(pJson);
		   res.json(pJson.rss.channel[0].item);
	   })
   })
})


