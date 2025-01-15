import { motion } from "motion/react";

const Lesson5 = () => {
    const parent ={
        hidden : {x:0,y:0,opacity:0},
        visible : {
            x:[0,300,-300,0],
            y:[0,300,-300,0],
            rotate : [0,300,-300,0],
            opacity : 1,
            transition : {
                ease: 'linear',
                repeat : Infinity,
                duration :5,
                opacity :{
                    duration :2,
                },
                rotate : {
                    delay:1.4
                }
            }
        }
    }
    return (
        <div className="border border-red-500 size-[600px] flex justify-center">

            <motion.div className="size-64 bg-indigo-500 rounded-lg " variants={parent} initial="hidden" animate="visible"></motion.div>
            
        </div>
    );
};

export default Lesson5;