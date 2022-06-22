module.exports = function reverse (n) {
    if (n<0) { // если число отрицательное то умножаем на -1...да да это колхоз
        return Number(Array.from((n*-1).toString()).reverse().join(''));
    } else {
        return Number(Array.from(n.toString()).reverse().join(''));
    }
  // делает число строкой, затем строку в массив, переворачивает массив, делает из массива строку и удаляет запятые, и последнее преобразование из строки в число
}
