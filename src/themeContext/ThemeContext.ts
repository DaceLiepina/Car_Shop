//Интерфейс для контекста:

import { createContext } from "react";
// ThemeContextType: Описание типа контекста. Это интерфейс,
//  который будет использоваться для типизации значений, передаваемых в контекст:
 export interface ThemeContextType {

// theme: строка, которая будет содержать текущую тему (например, "light" или "dark").
    theme: string;

// toggleTheme: функция без аргументов,
//  которая будет изменять тему с "light" на "dark" или наоборот.
    toggleTheme:()=> void
    

     



//Создание контекста:
 }
const ThemeContext = createContext<ThemeContextType | undefined>(undefined)

//ThemeContext: Создается контекст, который может хранить значение типа ThemeContextType или undefined
//  (в случае, если контекст еще не инициализирован).
// Начальное значение контекста установлено как undefined,
//  что означает, что пока мы не предоставим данные в контексте (при помощи Provider), контекст будет пустым.
export default ThemeContext