import Sorting from "./sorting"

export class SelectionSort extends Sorting{
    name = 'selectionsort'
     sort(arr: number[]):any[] {
        const swap = [];
        for (let i = 0; i < arr.length - 1; i++){
            for (let j = i+1; j < arr.length; j++) {
                swap.push({indexs:[i,j],type:'comp'});

                if (arr[i] > arr[j]) {
                    swap.push({indexs:[i,j],type:'swap'});
                    this.swap(arr, i, j);
                }

            }

        }

        return swap;
    }
}

export class BubbleSort extends Sorting{
    name = 'bubblesort';
    sort(arr:number[]):any[]
    {
        let n = arr.length;
        let i, j, temp;
        let swapped;
        let swap =[];
        for (i = 0; i < n - 1; i++)
        {
            swapped = false;
            for (j = 0; j < n - i - 1; j++)
            {
                swap.push({indexs:[j,j+1],type:'comp'});
                if (arr[j] > arr[j + 1])
                {
                    this.swap(arr, j+1, j);

                    swapped = true;
                    swap.push({indexs:[j,j+1],type:'swap'});
                }
            }

            if (swapped == false)
                break;
        }
        return swap;
    }


}

export class InsertionSort extends Sorting{
    name='insertionsort'
    sort(arr:number[]):any[]
    {
        let swap =[];
        let n = arr.length;
        let i, key, j;
        for (i = 1; i < n; i++)
        {
            key = arr[i];
            j = i - 1;
            swap.push({indexs:[i,j],type:'comp'});

            while (j >= 0 && arr[j] > key)
            {
                arr[j + 1] = arr[j];
                swap.push({indexs:[j,j+1],type:'swap'});
                j = j - 1;
            }
            arr[j + 1] = key;
        }
        return swap;
    }
}