# ML frontend test

Examen práctico Frontend Developer MercadoLibre.

## Aclaraciones importantes

- **Layout:** He seguido el layout tal como en el boceto, centré con un `padding` a la
izquierda solo por propositos de presentación, ya que quiero mantener el layout fluido,
pero no es para nada una buena técnica, lo se. Una mejor alternativa es
poner `text-align: center;` en el contenedor padre y centrar todo automaticamente, esto causa
que el titulo del producto esté centrado y en el boceto se lo requería alineado a la izquierda,
por lo tanto no seguí ese camino.

- **Diseño:** El diseño lo mantuve tal como en el boceto, agregué solo unos pocos elementos
de diseño propios porque no estaba seguro si se podía o no.

- **Tabs:** Al tener que ser el panel de tabs sólo en css se hace un poco frustrante la navegación, he buscado la mejor alternativa para que pueda manejarse con teclado y usando ARIA para usuarios no videntes.

## Development process

```
$ git clone https://github.com/joaquinrot/ml-frontend-test.git
$ cd ml-frontend-test && npm i
$ gulp serve
```



