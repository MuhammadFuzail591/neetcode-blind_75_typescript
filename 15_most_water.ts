function maxArea(heights: number[]): number {
    let left: number = 0, right: number = heights.length - 1;
    let currentMax: number = 0;
    
    while (left < right) {
        let width: number = right - left;
        let height: number = Math.min(heights[left], heights[right]);
        let currentArea: number = width * height;
        
        currentMax = Math.max(currentMax, currentArea);
        
        if (heights[left] < heights[right]) {
            left++;
        } else {
            right--;
        }
    }
    
    return currentMax;
}