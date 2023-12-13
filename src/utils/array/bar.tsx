
export class Bar{
    value: number;
    color: string;
    x: number; height: number; width: number; y: number;
    constructor(value: number, context: CanvasRenderingContext2D,x:number,height:number) {
        this.value = value;
        this.x = x;
        this.width = (height*0.07);
        this.height = this.value*(height*0.1);
        this.y = height - this.height;
        this.color = "red";
        this.draw(context);
    }

    draw(context: CanvasRenderingContext2D) {
        context.fillStyle = 'red';
        context.fillRect(this.x, this.y, this.width, this.height);
        this.text(context);
    }
    text(context:CanvasRenderingContext2D){
        context.font = (this.width*0.9)+'px serif'
        context.textAlign= "center"
        context.fillStyle ='white'
        context.fillText(this.value.toString(),this.x+this.width/2,this.height/2+this.y)
    }
    on(context: CanvasRenderingContext2D,type:string) {
        context.fillStyle = type==='swap'?'yellow':'blue';

        context.fillRect(this.x, this.y, this.width, this.height);
        this.text(context);

    }

}
