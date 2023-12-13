import {useEffect, useRef, useState} from "react"
import Sorting from "./algorithms/sorting/sorting";
import {BubbleSort, InsertionSort, SelectionSort} from "./algorithms/sorting/selectionSort";

type props={
        flag:boolean,
        setFlag:(val:boolean)=>void
        choose:string
}
export default function Canvas({flag,setFlag,choose}:props) {
        const canvasRef = useRef<HTMLCanvasElement | null>(null)
        const [obj ,setObj]=useState<Sorting|null>(null)
        const [context,setContext]=useState<CanvasRenderingContext2D|null>(null);
        useEffect(() => {
                const canvas = canvasRef.current;
                if (!canvas||obj) return;
                canvas.width = Math.min(500,window.innerWidth*0.9);
                canvas.height = Math.min(500,window.innerWidth*0.9);
                const ctx = canvas.getContext('2d')
               setContext(ctx);
        },[canvasRef])

        useEffect(() => {
                if(flag){
                        console.log(flag)
                        obj?.play();
                        setFlag(false);
                }
        }, [flag]);

        useEffect(() => {
                if(!context||choose==='choose'||!canvasRef?.current)return
                const arr = selectAlgorithm([3, 1, 6, 2, 6, 8,2, 7,9 ], context,choose,canvasRef?.current)
                setObj(arr);
        }, [choose]);

     function   selectAlgorithm(arr:number[],context:CanvasRenderingContext2D,choose:string,canvas:HTMLCanvasElement){
                switch (choose){
                        case "selectionsort":
                                return new SelectionSort(arr, context,canvas);
                        case 'bubblesort':
                                return new BubbleSort(arr, context, canvas);
                        case 'insertionsort':
                                return new InsertionSort(arr, context, canvas);
                        default:
                           return null;
                }
        }

return <canvas ref={canvasRef}/>
        
}