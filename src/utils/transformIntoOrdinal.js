export async function transformIntoOrdinalNumber (value) {
   const str = value.toString()

   if (str.charAt(str.length - 1) === '1') return `${value}st`
   else if (str.charAt(str.length - 1) === '2') return `${value}nd`
   else if (str.charAt(str.length - 1) === '3') return `${value}rd`

   return `${value}th`
}