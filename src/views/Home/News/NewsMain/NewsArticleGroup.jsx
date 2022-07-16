import React from "react";
import NewsArticle from "./NewsArticle";
import fields from '../../../../../src/services/database/database';
import dayjs from 'dayjs';


class NewsArticleGroup extends React.Component {
    // saveField = (field,i)=>{
    //     if(window.localStorage.getItem(`field_${i}`!=null))return 0;
    //     window.localStorage.setItem(`field_${i}`, JSON.stringify(field));
    //     this.fieldsLength = i+1
    // }
    reGet = ()=>{
        const fieldArray = [];
        const setFieldArray = (e, i)=>{
            const returnValue = JSON.parse(window.localStorage.getItem(`field_${i-1}`))
            return returnValue;
        }
        [1,1,1,1].filter((e, i)=>{
            setFieldArray(0, i);
        })
        return fieldArray
    }

    rearrange = (fields)=>{
        const rearrangedArray = fields.map(field=>[field.year.seconds,field]).sort().reverse().map(field=>field[1])
        return rearrangedArray
    }
    articleGroup = (data)=>{
        data.forEach((field, i)=>{
            // this.saveField(field, i)
            const update = dayjs.unix(field.year.seconds).toDate().toDateString();
            const updateDate = new Date(update);
            const yearValue = updateDate.getFullYear();
            const dateValue = updateDate.getDate();
            const monthValue = updateDate.getMonth()+1;
            const src = (!field.src)?(()=>{return 'https://cdn.pixabay.com/photo/2021/03/21/15/01/couple-6112296_1280.jpg'})():(()=>{return field.src})()
            this.returnValue =
            <NewsArticle
            list      = {this.returnValue}
            attribute = {field.attribute}
            src       = {src}
            lastUpdate= {`${yearValue}.${monthValue}.${dateValue}`}
            noteTitle = {field.title}
            text      = {field.text}
            />
        })
        if (this.returnValue==undefined) {
            return '';
            // return <>{this.articleGroup( this.reGet() )}</>
        } else {
            return <>{this.returnValue}</>;
        }
    }
    render() {return(
        this.articleGroup( this.rearrange( fields ) )
    )}
}

export default NewsArticleGroup;
