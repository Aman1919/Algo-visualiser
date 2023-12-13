import array from "../../utils/array/array";
export default class Sorting{
        arr: number[];
        array: array;

        constructor(arr: number[],context:CanvasRenderingContext2D,canvas:HTMLCanvasElement)
        {
                // super();
                this.arr = arr;
                this.array = new array(arr, context,canvas);
        }

        private animate(swaps:any[]) {
                if(swaps.length===0){
                        this.array.DisplayArray();
                        return;
                }

                const swap= swaps.shift();
                const [i,j] = swap.indexs;
                if(swap.type==='swap'){
                        [this.arr[i],this.arr[j]]=[this.arr[j],this.arr[i]];
                }

                this.array.DisplayArray(swap);
                setTimeout(()=>{
                        this.animate(swaps);
                },1000)
        }

        play(){
                const copy = [...this.arr];
                const swaps = this.sort(copy);
                this.animate(swaps)
        }

         sort(arr: number[]):any[]{
                return arr;
        }
        swap(arr: any[], xp:any, yp:any)
        {
                let temp = arr[xp];
                arr[xp] = arr[yp];
                arr[yp] = temp;
        }
}