const ap = new APlayer({  
container: document.getElementById('aplayer'),  
fixed: true,  
autoplay: true,  
audio: [  
{  
name: '你看不见',  
artist: 'Rainbow计划',  
url: 'http://music.163.com/song/media/outer/url?id=35625825.mp3',  
cover: '/images/player1.png',  
}, 
{  
name: '世间美好与你环环相扣',  
artist: '柏松',  
url: 'http://music.163.com/song/media/outer/url?id=1363948882.mp3',  
// cover: '/images/3.jpg',  
cover: '/images/player1.png',
}
]  
});  