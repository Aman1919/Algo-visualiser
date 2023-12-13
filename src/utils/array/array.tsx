import {Bar} from "./bar";
export default class array{
        arr: number[];
        context: CanvasRenderingContext2D;
        y: number;
        canvas:HTMLCanvasElement;
        constructor(arr: number[], context: CanvasRenderingContext2D,canvas:HTMLCanvasElement) {
                this.arr = arr;
                this.y = canvas.height;
                this.canvas = canvas;
                this.context = context;
                this.DisplayArray();
        }
        
        DisplayArray(swap?:any) {
                this.context.clearRect(0,0,500,500);
                this.context.fillStyle = "black";
                this.context.fillRect(0, 0, 500, 500);
                let gap = this.canvas.width*0.05;
                // this.displayArrow(this.context);
                for (let i = 0; i < this.arr.length; i++){
                        let bar = new Bar(this.arr[i], this.context, gap,this.canvas.height);
if(swap&&swap.indexs.includes(i)){
        bar.on(this.context,swap.type);
}
                        gap += this.canvas.width*0.1;
                }
                
        }
        


        
}
