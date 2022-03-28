<script>
import { text } from "svelte/internal";

    export let svg;
    export let mess;
    if(svg==''){
        svg='0'
    }
</script>

    <div class="box">
       <p> {mess} : {svg}  </p>  
    </div>
    
    <style>
      
        .box {
            border-top: 5px solid rgb(0, 145, 234);
            border-radius: 35px 35px 35px 35px;
            box-shadow: 0px 0px 2px 1px rgb(68, 138, 255);
            text-align: center;
            background-color:rgb(187, 222, 251);
            width: 170px;
            height: 50px;
        }
    </style>