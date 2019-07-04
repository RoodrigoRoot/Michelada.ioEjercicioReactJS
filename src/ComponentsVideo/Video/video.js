import React,{Component} from 'react'
import ItemDescription from'../Description/ItemVideoDescription'
import ItemVideoComments from '../Comments/ItemVideoComments'
import ItemVideoSocials from '../Socials/ItemsVideoSocials';
import ItemVideoThink from '../Thinks/ItemVideoThink'
import './video.css'


class Video extends Component{
   constructor(props){
       super(props)
     this.state={
        imagen:[
            'http://gettravel.com/wp-content/uploads/2018/04/Video-Placeholder.jpg'
         ],
         description:[
             'En este video se muestran técnicas de desarrollo Frontend para iniciar en el mundo de desarrollo web de manera fácil de la mano de expertos en la materia'
         ],
         socials:[
             {redsocial:'twitter', idsocial:'@noelrock333'},
             {redsocial:'Facebook', idsocial:'Noel Escobedo'}
         ],
         comments:[
             {imageURL:'https://cdn1.vectorstock.com/i/thumb-large/82/55/anonymous-user-circle-icon-vector-18958255.jpg',nombre:'Federico Soria',comentario:'Gracias por el video, me sirvió mucho en la app que estoy desarrrollando'},
             {imageURL:'https://cdn1.vectorstock.com/i/thumb-large/82/55/anonymous-user-circle-icon-vector-18958255.jpg',nombre:'Martha Gutierrez',comentario:'Me gusta mucho este tipo de contenido, Sigue así!'}
         ]
     }
}
    renderItemsSocial=(socials)=>{
        return socials.map((item,index)=> <ItemVideoSocials  key={index} socials={item} ></ItemVideoSocials>)
    }
    renderItemsComments=(comments)=>{
        return comments.map((item,index)=> <ItemVideoComments  key={index} comments={item} ></ItemVideoComments>)
    }

    render(){
        let {socials} = this.state
        let {comments} = this.state
        return(
            
            <main>               
                <article className="Container-Video">
                <h1 id="video-tittle">Frontend Básico</h1>
                <div className="Contain">
                <img id="Video" src={ this.state.imagen} alt=""/>
                <ItemDescription description={this.state} />
                {this.renderItemsSocial(socials)}
                <div className="comments">
                <h2>Comentarios</h2>
                {this.renderItemsComments(comments)}
                <ItemVideoThink/>
                </div>
                </div>
                
            </article>  
            </main>
        )
    }
   

}

export default Video