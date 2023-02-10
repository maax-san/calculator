export type calculatorData = {
  total?: number | null;
  next?: number | null;
  operation?: string | null;
};

/**
 * Calculator data contains:
 *   total:String      the running total
 *   next:String       the next number to be operated on with the total
 *   operation:String  +, -, etc.
 */
export const calculate = (
  data: calculatorData,
  buttonName: string
): calculatorData => {

  if (buttonName === "AC") {
    return {
      total: null,
      next: null,
      operation: null,
    };
  }

  if (isNumber(buttonName)) {
    if (data.operation) {
      return {
        ...data,
        next: parseInt(buttonName)
      };
    }

    return {
      ...data,
      total: parseInt(buttonName),
    };
  }

  if (isOperator(buttonName) && data.total) {
    if (buttonName === '=' && data.next && data.operation) {
      return {
        ...data,
        next: null,
        operation: null,
        total: operation(data.total, data.next, data.operation)
      }
    }

    return {
      ...data,
      operation: buttonName,
    }
  }

  if (buttonName === "+/-" && data.total) {
    return {
      ...data,
      total: -data.total,
    };
  }

  return {
    total: null,
    next: null,
    operation: null,
  };
};

const operation = (current: number, next: number, operation: string) => {
  switch(operation) {
    case '-':
      return current - next;
    case '+':
      return current + next;
    case 'x':
      return current * next;
    case '÷':
      return current / next;
    default:
      throw new Error('invalid operation');
  }
}

export const calculateButtons = [
  {
    id: 1,
    value: "AC",
    type: "function",
  },
  {
    id: 2,
    value: "+/-",
    type: "function",
  },
  {
    id: 3,
    value: "%",
    type: "function",
  },
  {
    id: 4,
    value: "÷",
    type: "operator",
  },
  {
    id: 5,
    value: "7",
    type: "digit",
  },
  {
    id: 6,
    value: "8",
    type: "digit",
  },
  {
    id: 7,
    value: "9",
    type: "digit",
  },
  {
    id: 8,
    value: "x",
    type: "operator",
  },
  {
    id: 9,
    value: "4",
    type: "digit",
  },
  {
    id: 10,
    value: "5",
    type: "digit",
  },
  {
    id: 11,
    value: "6",
    type: "digit",
  },
  {
    id: 12,
    value: "-",
    type: "operator",
  },
  {
    id: 13,
    value: "1",
    type: "digit",
  },
  {
    id: 14,
    value: "2",
    type: "digit",
  },
  {
    id: 15,
    value: "3",
    type: "digit",
  },
  {
    id: 16,
    value: "+",
    type: "operator",
  },
  {
    id: 17,
    value: "0",
    type: "digit",
  },
  {
    id: 18,
    value: ".",
    type: "digit",
  },
  {
    id: 19,
    value: "=",
    type: "operator",
  },
];

const isNumber = (item: any) => {
  return /[0-9]+/.test(item);
};

const isOperator = (value: string) => {
  return ['+','-','=','÷','x'].includes(value)
};
