
let piece_Y, piece_X;

let piece_kind;
let piece_kind_next = document.querySelector('#piece_kind_next').value;
let piece_rotation;

let isEvaded = false;

let tetrix_blockbox_boxsize=25;
let tetrix_blockbox_top=50;
let tetrix_blockbox_left=280;

// tetris_board[row][col]; 20+1행 10+2열
let score = 0;
let tetris_board =
[
	[-1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0,-1],
	[-1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0,-1],
	[-1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0,-1],
	[-1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0,-1],
	[-1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0,-1],
	[-1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0,-1],
	[-1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0,-1],
	[-1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0,-1],
	[-1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0,-1],
	[-1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0,-1],
	[-1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0,-1],
	[-1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0,-1],
	[-1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0,-1],
	[-1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0,-1],
	[-1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0,-1],
	[-1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0,-1],
	[-1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0,-1],
	[-1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0,-1],
	[-1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0,-1],
	[-1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0,-1],
	[-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1]
];

const TETRIS_BOARD_MAX_Y = 21;
const TETRIS_BOARD_MAX_X = 12;

const TETRIS_PIECE_STARTPOINT_Y =0;
const TETRIS_PIECE_STARTPOINT_X =4;

const TETRIS_PIECE_SHAPE = //[7 /*kind */ ][4 /* rotation */ ][4 /* horizontal blocks */ ][4 /* vertical blocks */ ] =
[
	[	// Square
		[
			[0, 0, 0, 0],
			[0, 1, 1, 0],
			[0, 1, 1, 0],
			[0, 0, 0, 0]
		],
		[
			[0, 0, 0, 0],
			[0, 1, 1, 0],
			[0, 1, 1, 0],
			[0, 0, 0, 0]
		],
		[
			[0, 0, 0, 0],
			[0, 1, 1, 0],
			[0, 1, 1, 0],
			[0, 0, 0, 0]
		],
		[
			[0, 0, 0, 0],
			[0, 1, 1, 0],
			[0, 1, 1, 0],
			[0, 0, 0, 0]
		]
	],
	[	// I
		[
			[0, 0, 0, 0],
			[2, 2, 2, 2],
			[0, 0, 0, 0],
			[0, 0, 0, 0]
		],
		[
			[0, 2, 0, 0], 
			[0, 2, 0, 0],
			[0, 2, 0, 0],
			[0, 2, 0, 0]
		],
		[
			[0, 0, 0, 0],
			[2, 2, 2, 2],
			[0, 0, 0, 0],
			[0, 0, 0, 0]
		],
		[
			[0, 2, 0, 0], 
			[0, 2, 0, 0],
			[0, 2, 0, 0],
			[0, 2, 0, 0]
		]
	],
	[	// L
		[
			[0, 0, 0, 0],
			[0, 0, 3, 0],
			[3, 3, 3, 0],
			[0, 0, 0, 0]
		],
		[
			[0, 0, 0, 0],
			[0, 3, 0, 0],
			[0, 3, 0, 0],
			[0, 3, 3, 0]
		],
		[
			[0, 0, 0, 0],
			[0, 0, 0, 0],
			[3, 3, 3, 0],
			[3, 0, 0, 0]
		],
		[
			[0, 0, 0, 0],
			[3, 3, 0, 0],
			[0, 3, 0, 0],
			[0, 3, 0, 0]
		]
	],
	[	// L mirrored
		[
			[0, 0, 0, 0],
			[4, 0, 0, 0],
			[4, 4, 4, 0],
			[0, 0, 0, 0]
		],
		[
			[0, 0, 0, 0],
			[0, 4, 4, 0],
			[0, 4, 0, 0],
			[0, 4, 0, 0]
		],
		[
			[0, 0, 0, 0],
			[0, 0, 0, 0],
			[4, 4, 4, 0],
			[0, 0, 4, 0]
		],
		[
			[0, 0, 0, 0],
			[0, 4, 0, 0],
			[0, 4, 0, 0],
			[4, 4, 0, 0]
		]
	],
	[	// N
		[
			[0, 0, 0, 0],
			[5, 5, 0, 0],
			[0, 5, 5, 0],
			[0, 0, 0, 0]
		],
		[
			[0, 0, 5, 0],
			[0, 5, 5, 0],
			[0, 5, 0, 0],
			[0, 0, 0, 0]
		],
		[
			[0, 0, 0, 0],
			[5, 5, 0, 0],
			[0, 5, 5, 0],
			[0, 0, 0, 0]
		],
		[
			[0, 0, 5, 0],
			[0, 5, 5, 0],
			[0, 5, 0, 0],
			[0, 0, 0, 0]
		]
	],
	[	// N mirrored
		[
			[0, 0, 0, 0],
			[0, 6, 6, 0],
			[6, 6, 0, 0],
			[0, 0, 0, 0]
		],
		[
			[0, 6, 0, 0],
			[0, 6, 6, 0],
			[0, 0, 6, 0],
			[0, 0, 0, 0]
		],
		[
			[0, 0, 0, 0],
			[0, 6, 6, 0],
			[6, 6, 0, 0],
			[0, 0, 0, 0]
		],
		[
			[0, 6, 0, 0],
			[0, 6, 6, 0],
			[0, 0, 6, 0],
			[0, 0, 0, 0]
		]
	],
	[	// T
		[
			[0, 0, 0, 0],
			[0, 7, 0, 0],
			[7, 7, 7, 0],
			[0, 0, 0, 0]
		],
		[
			[0, 0, 0, 0],
			[0, 7, 0, 0],
			[0, 7, 7, 0],
			[0, 7, 0, 0]
		],
		[
			[0, 0, 0, 0],
			[0, 0, 0, 0],
			[7, 7, 7, 0],
			[0, 7, 0, 0]
		],
		[
			[0, 0, 0, 0],
			[0, 7, 0, 0],
			[7, 7, 0, 0],
			[0, 7, 0, 0]
		]
	]
];

	
	
	


// Canvas 변수
let init=false;
let myCanvas;
let Context;

// 테트리스 보드 초기화. 실행시 최초 발동.
function Init()
{
	if(init==false)
	{
		myCanvas=document.getElementById("MyCanvas");
		Context=myCanvas.getContext("2d");		
		init=true;
		
		// 첫블럭 생성
		ajaxGenerateBlockEvent();
	}
}



// 테트리스 보드 그리기.
function onDraw()
{
	if(init==false) return;
	// 전체 테두리
	Context.strokeStyle="#000";
	Context.lineWidth=1;
	Context.strokeRect(0, 0, myCanvas.width-1, myCanvas.height-1);
	
		
														//////////////////////////////////
														//	For Debugging
														/*
														console.log('piece_Y : '+piece_Y);
														console.log('piece_X : '+piece_X);
														
														let thisblock;
														switch(piece_kind){
															case 0: thisblock = 'square';
															break;
															case 1: thisblock = 'I';
															break;
															case 2: thisblock = 'L';
															break;
															case 3: thisblock = 'Lmirror';
															break;
															case 4: thisblock = 'N';
															break;
															case 5: thisblock = 'Nmirror';
															break;
															case 5: thisblock = 'T';
															break;
														}
														console.log(`thisblock : ${thisblock}`);
														*/
														//	For Debugging
														//////////////////////////////////


	// 블럭 표시
	for(var i=1; i<TETRIS_BOARD_MAX_Y; ++i)
		for(var j=0;j<TETRIS_BOARD_MAX_X;++j)
		{
			
			// 두가지색으로 표현된 초경량 모드...
//			Context.fillStyle = (tetris_board[i][j]==0 ? "#ccc" : "red")
//			
//			if(piece_Y <= i && i < piece_Y+4 && piece_X <= j && j < piece_X+4){
//				if(TETRIS_PIECE_SHAPE[piece_kind][piece_rotation][i-piece_Y][j-piece_X]!=0)
//					Context.fillStyle="red";
//			}
			
			//게임보드의 테두리 벽은 #444
			//게임보드의 비어있는 칸은 #ccc
			//블럭 모양에 따라 각기 다른 색 출력.
			Context.fillStyle = (tetris_board[i][j]<0 ? "#444" 		: 
								(tetris_board[i][j]<1 ? "#ccc" 		: 
								(tetris_board[i][j]<2 ? "RED" 		: 
								(tetris_board[i][j]<3 ? "MAGENTA" 	: 
								(tetris_board[i][j]<4 ? "ORANGE" 	: 
								(tetris_board[i][j]<5 ? "GREEN" 	: 
								(tetris_board[i][j]<6 ? "BLUE" 		: 
								(tetris_board[i][j]<7 ? "NAVY" 		: "PURPLE" ) ) ) ) ) ) ) );
			
			//현재 움직이고 있는 블럭은 덧씌워 그려준다!
			if(piece_Y <= i && i < piece_Y+4 && piece_X <= j && j < piece_X+4){
				if(TETRIS_PIECE_SHAPE[piece_kind][piece_rotation][i-piece_Y][j-piece_X]!=0)
					Context.fillStyle = (piece_kind==0 ? "RED" 		: 
										(piece_kind==1 ? "MAGENTA" 	: 
										(piece_kind==2 ? "ORANGE" 	: 
										(piece_kind==3 ? "GREEN" 	: 
										(piece_kind==4 ? "BLUE" 	: 
										(piece_kind==5 ? "NAVY" 	: "PURPLE" ) ) ) ) ) );
			}
			
			if(isGAMEOVER){
				if(tetris_board[i][j] == -444)
					Context.fillStyle = "#444";
				if(tetris_board[i][j] == -999)
					Context.fillStyle = "#999";
			}
			
			x=tetrix_blockbox_left + j*tetrix_blockbox_boxsize;
			y=tetrix_blockbox_top + i*tetrix_blockbox_boxsize;
			Context.fillRect(x, y, tetrix_blockbox_boxsize-2, tetrix_blockbox_boxsize-2);
		}
}





let nowKeyEvent = '';

let numInterval = 202;	//Starts 202 ! It Downs according to numClearedLine...
let numLeftCount = numInterval;

let numClearedLine = 0;

let isRunning = false;
let isGAMEOVER = false;



function Run()
{
	/*
	 *	만약 재귀함수로 구현한다면....
	 *
	 *	일정 딜레이(1m)가 흘렀는지 확인해주는 로직
	 	if(기록된시간 != 현재시간-1ms){
		
			while(흐를때까지 true){
				//nothing. 흐를때까지 아무것도 안함
			}
		}
	 */
	
	
	
	// 입력된 키입력이 있다면 ajaxJoystick(nowKeyEvent) 실행
	// 이후 실행완료된 해당 키입력 지워줌
	if (nowKeyEvent.length > 0)
	{
		ajaxJoystick(nowKeyEvent);
		nowKeyEvent = '';
	}
	else
	{
		// numLeftCount가 0가 되면 ajaxIntervalEvent 실행
		if (numLeftCount == 0)
		{
			console.log(`RUN!! NOW INTERVAL is ${numInterval}`);
			
			ajaxIntervalEvent();
			onDraw();
			
			numLeftCount = isEvaded ? 66 : numInterval;
		}
		
		// numLeftCount 매 카운트마다 깎는다
		numLeftCount -= 1;
	}
	
	//게임오버 발생 시 애니메이션 재생.
	if(isGAMEOVER){
		nowAnimation = 'GAMEOVER';
		alert('GAMEOVER!!');
		alert('GAMEOVER!!');
		alert('GAMEOVER!!');
		alert('GAMEOVER!!');
		return;
	}
	
	
	
	Run();
}





$(document).ready(function(){
	Init();
	Run();
});
