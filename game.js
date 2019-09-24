let Application = PIXI.Application;
let Sprite = PIXI.Sprite;
let pre = PIXI.loader;
let Text = PIXI.Text;
let resources = PIXI.loader.resources;
let game = new Application({ 
    backgroundColor: 0xF28DA2,  
    height: 600, 
    width: 600});
var crab;
var state;
document.body.appendChild(game.view);
pre.add("crab.png");
pre.add("chef.png");
pre.add("a.png");
pre.load(setStage);
    
function setStage() {
maze = new Sprite(resources["a.png"].texture);
crab = new Sprite(resources["crab.png"].texture);
chef1 = new Sprite(resources["chef.png"].texture);
chef2 = new Sprite(resources["chef.png"].texture);
chef3 = new Sprite(resources["chef.png"].texture);
chef4 = new Sprite(resources["chef.png"].texture);
chef5 = new Sprite(resources["chef.png"].texture);
chef6 = new Sprite(resources["chef.png"].texture);
chef7 = new Sprite(resources["chef.png"].texture);
chef8 = new Sprite(resources["chef.png"].texture);
chef9 = new Sprite(resources["chef.png"].texture);
chef10 = new Sprite(resources["chef.png"].texture);
chef11 = new Sprite(resources["chef.png"].texture);
chef12 = new Sprite(resources["chef.png"].texture);
chef13 = new Sprite(resources["chef.png"].texture);
chef14 = new Sprite(resources["chef.png"].texture);
chef15 = new Sprite(resources["chef.png"].texture);
chef16 = new Sprite(resources["chef.png"].texture);
chef17 = new Sprite(resources["chef.png"].texture);
chef18 = new Sprite(resources["chef.png"].texture);
chef19 = new Sprite(resources["chef.png"].texture);
chef20 = new Sprite(resources["chef.png"].texture);
chef21 = new Sprite(resources["chef.png"].texture);
chef22 = new Sprite(resources["chef.png"].texture);
chef23 = new Sprite(resources["chef.png"].texture);
chef24 = new Sprite(resources["chef.png"].texture);
chef25 = new Sprite(resources["chef.png"].texture);
let welcome = new PIXI.Text('Welcome to Crabfest', {fontFamily: 'Helvetica', fontSize: 20, fill : 0xffffff, visible: true});
let pressEnter = new PIXI.Text('Press Enter to Start', {fontFamily: 'Helvetica', fontSize: 12, fill : 0xffffff, visible: true });
maze.x = 0;
maze.y = 0;
crab.x = -10;
crab.y = -10; 
crab.vx = 0;
crab.vy = 0;
chef1.x = 40;
chef1.y = 40;
chef2.x = 10;
chef2.y = 130;
chef3.x = 170;
chef3.y = 0;
chef4.x = 145;
chef4.y = 130;
chef5.x = 80;
chef5.y = 180;
chef6.x = 270;
chef6.y = 50;
chef7.x = 270;
chef7.y = 150;
chef8.x = 270;
chef8.y = 250;
chef9.x = 230;
chef9.y = 335;
chef10.x = 70;
chef10.y = 280;
chef11.x = 70;
chef11.y = 370;
chef12.x = 70;
chef12.y = 460;
chef13.x = 140;
chef13.y = 460;
chef14.x = 210;
chef14.y = 480;
chef15.x = 280;
chef15.y = 480;
chef25.x = 350;
chef25.y = 400;
chef16.x = 330;
chef16.y = 250;
chef17.x = 430;
chef17.y = 330;
chef18.x = 450;
chef18.y = 230;
chef19.x = 450;
chef19.y = 140;
chef20.x = 450;
chef20.y = 50;
chef21.x = 280;
chef21.y = 480;
chef22.x = 280;
chef22.y = 480;
chef23.x = 280;
chef23.y = 480;
chef24.x = 280;
chef24.y = 480;
welcome.position.set(350, 10);
pressEnter.position.set(390,30);
game.stage.addChild( maze );
game.stage.addChild( welcome );
game.stage.addChild( pressEnter );
game.stage.addChild( crab );
game.stage.addChild( chef1 );
game.stage.addChild( chef2 );
game.stage.addChild( chef3 );
game.stage.addChild( chef4 );
game.stage.addChild( chef5 );
game.stage.addChild( chef6 );
game.stage.addChild( chef7 );
game.stage.addChild( chef8 );
game.stage.addChild( chef9 );
game.stage.addChild( chef10 );
game.stage.addChild( chef11 );
game.stage.addChild( chef12 );
game.stage.addChild( chef13 );
game.stage.addChild( chef14 );
game.stage.addChild( chef15 );
game.stage.addChild( chef16 );
game.stage.addChild( chef17 );
game.stage.addChild( chef18 );
game.stage.addChild( chef19 );
game.stage.addChild( chef20 );
game.stage.addChild( chef21 );
game.stage.addChild( chef22 );
game.stage.addChild( chef23 );
game.stage.addChild( chef24 );
game.stage.addChild( chef25 );
let aKey = keyboard( 65 );
let dKey = keyboard( 68 );
let wKey = keyboard( 87 );
let sKey = keyboard( 83 );
let enterKey = keyboard( 13 );
enterKey.press = () =>{
welcome.visible = false;
pressEnter.visible = false;          
aKey.press = () => {
    crab.vx = -1;
    crab.vy = 0;};
aKey.release = () => {
    if (!dKey.isDown && crab.vy === 0) {
    crab.vx = 0;
    crab.vy = 0;}};
wKey.press = () => {
    crab.vy = -1;
    crab.vx = 0;};
wKey.release = () => {
    if (!sKey.isDown && crab.vx === 0) {
    crab.vy = 0;}};
dKey.press = () => {
    crab.vx = 1;
    crab.vy = 0;};
dKey.release = () => {
    if (!aKey.isDown && crab.vy === 0) {
    crab.vx = 0;}};
sKey.press = () => {
    crab.vy = 1;
    crab.vx = 0;
  };
sKey.release = () => {
    if (!wKey.isDown && crab.vx === 0) {
    crab.vy = 0;}};}
        
state = play;
game.ticker.add( delta => gameLoop( delta ) );}

function gameLoop( delta )
{
state( delta );
}

function play( delta ) 
{
crab.x += crab.vx;
crab.y += crab.vy;
bounds();
chefAttack();
finish();
}

function bounds()
{
if(crab.x < -40 || crab.y < -40)
{
crab.x = -10;
crab.y = -10;
}
if(crab.x > 550 || crab.y > 550)
{
crab.x = -10;
crab.y = -10;
}}

function chefAttack()
{
var width = 40;
var height = 53;
var textures = [chef1,chef2,chef3,chef4,chef5,chef6,chef7,chef8,chef9,chef10,chef11,chef12,chef13,chef14,chef14,chef15,chef16,chef17,chef18,chef19,chef20,chef21,chef22,chef23,chef24,chef25];
for (var i = 0; i < 26; ++i)
{
if (((crab.x <= textures[i].x + width) && (crab.x >= textures[i].x - width)) && ((crab.y <= textures[i].y + height) && (crab.y >= textures[i].y - height)))
{
crab.x = -10;
crab.y = -10;}}}

function finish()
{
if (crab.y > 510 && crab.x > 510)
{
let finishText = new PIXI.Text('You survived Crabfest', {fontFamily : 'Arial', fontSize: 30, fill : 0x000000, visible : true});
finishText.position.set(270, 0);
game.stage.addChild(finishText);}}
    
function keyboard(keyCode) 
{
var key = {};
key.code = keyCode;
key.isDown = false;
key.isUp = true;         
key.downHandler = event => 
{
if (event.keyCode == key.code && key.press)
{
key.press();
key.isDown = true;
key.isUp = false;}
event.preventDefault();};
key.upHandler = event => 
{
if (event.keyCode == key.code && key.release)
{
key.release();
key.isDown = false;
key.isUp = true;
}
event.preventDefault();};
window.addEventListener("keydown", key.downHandler.bind(key), false);
window.addEventListener("keyup", key.upHandler.bind(key), false);
return key;}
	
//Code used for Keyboard Movement:
//https://github.com/kittykatattack/learningPixi/blob/master/examples/12_keyboardMovement.html
