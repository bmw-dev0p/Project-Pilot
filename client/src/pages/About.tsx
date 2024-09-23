import taskImg from '../assets/taskManagement.png';

const About = () => {
    return (
        <div className="container2">
            <img className='taskImg' src={taskImg} alt='taskManagement' />
            <div className="text-container">
                <h1 className='header'>About Us</h1>
                <p className='p1'>
                    At Project Pilot, we are dedicated to making task management easier, faster, and more convenient for everyone. Whether you're managing workplace projects, organizing personal tasks, or keeping track of school assignments, our platform offers a wide variety of tools to help you stay on top of your responsibilities. With features designed for both individuals and teams, our goal is to streamline your workflow and help you focus on what really matters. Created by Brad Webster, Andrew Surrena, and Nadia Hashemi—students of the edX Coding Bootcamp—our mission is to provide an intuitive and efficient system that adapts to your needs, no matter where or how you work.
                </p>
            </div>
        </div>
    );
};

export default About;
