#include<stdio.h>

void bubble_sort();
void swap(int *a,int *b);

int main(){
    int a[10] = {2,3,53,2,102,3242,523,123,1,991};
    bubble_sort(a);
}


/**冒泡排序*/
void bubble_sort(int a[]){
    int result[10];
    for(int i = 0;i< 10 ;i++){
        for(int j = 1;j < 10 -i ; j++){
            if(a[j] > a[j - 1]){
                swap(&a[j],&a[j-1]);
            }
        }
    }

    for(int i = 0;i< 10 ;i++){
        printf("%d\n",a[i]);
    }
}

/**一个交换函数*/
void swap(int *a,int *b){
    int tmp = *a;
    *a = *b;
    *b = tmp;
}