/**
 * Created by Andrey on 09.04.2015.
 */
/*2.	На форме разместить 4 элемента Check Box c надписями «Сильный», «Смелый», «Добрый», «Умный».
 При нажатии на кнопку «Добавить» выбранные качества отображаются с использованием MessageBox. */

function Select ()
{
 var Result = "";

 if(document.getElementById("inlineCheckbox1").checked)
  Result = "Сильный";

 if(document.getElementById("inlineCheckbox2").checked)
  if (Result)
   Result += ", Смелый";
  else
   Result = "Смелый";

 if(document.getElementById("inlineCheckbox3").checked)
  if (Result)
   Result += ", Добрый";
  else
   Result = "Добрый";

 if(document.getElementById("inlineCheckbox4").checked)
  if (Result)
   Result += ", Умный";
  else
   Result = "Умный";

if (!Result)
Result = "Ничего не выбрано";

 alert(Result);
}