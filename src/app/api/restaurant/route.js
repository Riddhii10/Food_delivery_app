import { connectionStr } from "@/app/lib/db";
import { restaurantSchema } from "@/app/lib/restaurantsModel";
import mongoose from "mongoose";
import { NextResponse } from "next/server";

export async function GET(){
    await mongoose.connect(connectionStr,{useNewUrlParser:true})
    const data=await restaurantSchema.find()
    console.log(data)

    return NextResponse.json({result:data})
}

// signup mai using 
export async function POST(request){
    let payload=await request.json();
    await mongoose.connect(connectionStr,{useNewUrlParser:true})
    let result;
    let success=false;
    if(payload.login){
        // use it for login
        result=await restaurantSchema.findOne({email:payload.email,password:payload.password})
        if(result){
            success=true
        }
    }
    else{
        // use it for signup 
        const restaurant=new restaurantSchema(payload)
        result= await restaurant.save()
        if (result){
            succes=true;
        }
    }
    
    
    // console.log(payload)
    // return NextResponse.json({result:true})
    return NextResponse.json({result,success})
}


// can create only 1 get , 1 post 