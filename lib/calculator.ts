export class Calculator {
    add(a: number, b: number): number {
        return a + b;
    };
    sub(a: number, b: number): number{
        return a - b;
    };
    multiple(a: number, b: number): number{
        return a * b;
    };
    divide(a: number, b: number): number{
        if (b === 0) {
            return a;
        } else {
            return a / b;
        }
        switch (b) {
            case 0:
                return 0;
                break;
            case 1:
                return a / b;
                break;
            case 2:
                return a / b;
        }
    };
}
