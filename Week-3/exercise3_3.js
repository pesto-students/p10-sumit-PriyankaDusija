function createIncrement() 
{
    let count = 0;
    function increment() 
    {
        count++;
    }
    let message = `Count is${count}`;
    function log() 
    {
        console.log(message);
    }
    return [increment, log];
}

const [increment, log] = createIncrement();

increment();
increment();
increment();
log(); // What is logged?


/* Answer: output is: Count is0 . Line 8 is eveluated and assigned to message variable as string. At the time of evaluation 
count value is 0. When increment function in called it is incrementing count variable value but the 
message is not modified. when the log function is called it simply displays the string stored in 
message variable and not the string with new value of count.  
*/
