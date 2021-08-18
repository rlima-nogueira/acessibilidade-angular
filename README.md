
### Bind em aria-label ### 
Para usar o bind em qualquer aria-label que seja, precisamos adicionar o "attr." na frente. Por exemplo: 
<img src="src/assets/img/attr.png">
</br>

### Utilizando Diretivas ###
<b>O que são diretivas? </b></br>
Quando temos uma lógica que possivelmente será usada em mais de um lugar na aplicação, você deve abstraí-la para uma diretiva. Assim, ela funciona como um "novo componente" que você pode chamar direto no template. Por exemplo: 

<img src="src/assets/img/diretiva.png">

</br></br>

<h3><b>ContentChildren</b></h3>
Busca todo mundo que é filho do elemento no qual a diretiva KeyboardManagerDirective faz parte, pega todos esses filhos e traz apenas aqueles que têm a diretiva KeyboardManagedItemDirective.

<img src="src/assets/img/contentchildren.png">

Essa implementação, nos possibilita trazer as opções dentro de um array. 

<img src="src/assets/img/contentchildrenresultado.png">
