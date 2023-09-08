const express = require("express");
const router = express.Router();
const Student = require('../models/student');

router.get('/', async (req,res)=>{
    try{
        const students = await Student.find();
        res.json(students);
    }catch(err){
        res.send("error : "+err);
    }
})

router.get('/:id', async (req,res)=>{
    try{
        const student = await Student.findById(req.params.id);
        res.json(student);
    }catch(err){
        res.send("error : "+err);
    }
})

router.post('/', async (req,res)=>{
    const student = new Student({
        fname : req.body.fname,
        lname : req.body.lname,
        std : req.body.std,
        admitDate : new Date()
    })
    try{
        const check = await student.save();
        res.json(check);
    }catch(err){
        res.send("error : "+err);
    }
})

router.patch('/:id', async (req,res)=>{
    try{
        const student = await Student.findById(req.params.id);
        if(req.body.fname) student.fname = req.body.fname;
        if(req.body.lname) student.lname = req.body.lname;
        if(req.body.std) student.std = req.body.std;
        if(req.body.admitDate) student.admitDate = req.body.admitDate;
        const check = await student.save();
        res.json(check);
    }catch(err){
        res.send("error : "+err);
    }
})

router.delete('/:id', async (req,res)=>{
    try{
        const student = await Student.findById(req.params.id);
        const check = await student.delete();
        res.json(check);
    }catch(err){
        res.send("error : "+err);
    }
})

module.exports = router;