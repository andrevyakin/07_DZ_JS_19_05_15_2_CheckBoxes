/**
 * Created by Andrey on 09.04.2015.
 */
/*2.	�� ����� ���������� 4 �������� Check Box c ��������� ��������, �������, �������, ������.
 ��� ������� �� ������ ���������� ��������� �������� ������������ � �������������� MessageBox. */

function Select ()
{
 var Result = "";

 if(document.getElementById("inlineCheckbox1").checked)
  Result = "�������";

 if(document.getElementById("inlineCheckbox2").checked)
  if (Result)
   Result += ", ������";
  else
   Result = "������";

 if(document.getElementById("inlineCheckbox3").checked)
  if (Result)
   Result += ", ������";
  else
   Result = "������";

 if(document.getElementById("inlineCheckbox4").checked)
  if (Result)
   Result += ", �����";
  else
   Result = "�����";

if (!Result)
Result = "������ �� �������";

 alert(Result);
}