import { useState } from 'react';
import { Link } from 'react-router-dom';
// 
import './Aboutpage.css';
import './../resume/Resume.css';

function Aboutpage() {
  
  const [personals] = useState([
    {
      'key': '+234(0)8161358288',
      'linkTo': '',
      'style': 'url(/media/icons/phone.svg)'
    },
    {
      'key': 'dantaiyearemu@gmail.com',
      'linkTo': '',
      'style': 'url(/media/icons/email.svg)'
    },
    {
      'key': 'linkedin.com/in/dan-taiye-aremu/',
      'linkTo': '',
      'style': 'url(/media/icons/facebook.svg)'
    },
    {
      'key': 'github.com/aremu-dan',
      'linkTo': '',
      'style': 'url(/media/icons/facebook.svg)'
    }
  ]);

  const [hobbies] = useState([
    'swimming',
    'chess',
    'movies'
  ]);

  const [summary] = useState([
    'I am a goal-oriented, passionate, and collaborative individual, can seamlessly integrate/adapt into any environment and loves to explore new technologies. Currently, a Software Engineer at Huawei Technologies Co. Ltd',
    'Skilled in solving problems using JavaScript, React, PHP, Python and MySQL, with professional experience using HTML, CSS, APIs, JSON, MYSQL, Data Structures',
    'My goal is to use my knowledge and skills to make the world a better place by leveraging tools made available through technology'
  ]);

  const [skills] = useState([
    {
      skillname: 'html',
      skillImg: 'html',
      skillIcon: 'temp'
    },
    {
      skillname: 'css',
      skillImg: 'html',
      skillIcon: 'temp'
    },
    {
      skillname: 'bootstrap',
      skillImg: 'html',
      skillIcon: 'temp'
    },
    {
      skillname: 'javascript',
      skillImg: 'html',
      skillIcon: 'temp'
    },
    {
      skillname: 'react js',
      skillImg: 'html',
      skillIcon: 'temp'
    },
    {
      skillname: 'php',
      skillImg: 'html',
      skillIcon: 'temp'
    },
    {
      skillname: 'mySql',
      skillImg: 'html',
      skillIcon: 'temp'
    },
    {
      skillname: 'python',
      skillImg: 'html',
      skillIcon: 'temp'
    }
  ]);

  const [experiences] = useState([
    {
      jobstart: 'may 2021',
      jobend: 'present',
      jobrole: 'Tools Automation Engineer',
      company: 'huawei technologies co. ltd,',
      description: [
        'Reduced manual tasks by 90% and improved operations by developing and updated application modules to automate manual processes',
        'Managed projects and held reviews to ensure implements are timely and meet requirements',
        'Maintained communications with customer, understanding pain-points, negotiating timelines and provided daily reports on completed and running tasks',
        'Effectively coded software changes and alterations based on unique design specifications'
      ]
    },
    {
      jobstart: 'february 2020',
      jobend: 'february 2021',
      jobrole: '...',
      company: 'National Youth Service',
      description: [
        'Optimized and maintained web-based management system UI, making adjustments and updates to features to improve usability',
        'Improved database relationship and normalization to reduce redundancy and improve search response time by 20%',
        'Made researches and attended meetings with clients and potential clients, using the research data help the organization understand clients\’ needs and provide appropriate response'
      ]
    },
    {
      jobstart: 'june 2020',
      jobend: 'november 2020',
      jobrole: 'software developer',
      company: 'GOPOD Africa',
      description: [
        'Built and maintained organizations website',
        'Created real-time data reports in the user dashboard',
        'Provided dynamic customized forms based on customers unique requirements',
        'Integrated custom-modules that enable customers share and get live data across multiple locations to improve analytical and constructive decision making'
      ]
    },
    {
      jobstart: 'june 2019',
      jobend: 'november 2021',
      jobrole: 'software engineer',
      company: 'autopinte quickfit',
      description: [
        'Successfully built and maintained the development of a web-based management system that generates real-time reports, integrates payments, secure user and staff data and operation logs improving efficiency and reducing manual operations by 90%',
        'Designed and optimized system UI to increase usability and efficiency',
        'Designed, optimized and managed database structure and relations to limit redundancy and increase uniformity which enabled a faster query time',
        'Developed automated mailing module which sends timely automated notifications to staff and customers as reminders/feedbacks on operations'
      ]
    },
    {
      jobstart: 'june 2018',
      jobend: 'february 2021',
      jobrole: 'intern software engineer',
      company: 'haiman resources consulting',
      description: [
        'Built the backend to a utility bill payment platform that integrates multiple APIs for utility bill payments, airtime recharge and TV subscriptions, using a custom-built wallet system and dashboard',
        'Built a bitcoin trading platform which implements multiple libraries, such as a bitcoin address generating API, barcode generating API that converts generated address to barcode, a wallet system, a secure login system and a database for data management'
      ]
    }
  ]);

  const [educations] = useState([
    {
      institution: 'ladoke akintola university of technology, ogbomoso',
      degree: 'B.Tech',
      startdate: 'october 2013',
      enddate: 'september 2019'
    }
  ]);

  return (
    <>
      <div className='about-me'>
        <div className='about-me-profile'>
          <div className='profile-details'>
            <div className='dp' my-profile-picture='./../../..//public/media/user/user_temp.png'></div>

            <div className='details'>
              <p>dan aremu</p>
              <div>
                <span>software engineer</span>
              </div>
            </div>
          </div>

          <SectionProfile sectionTitle='personal'>
            <div className='about-personals'>
              <div className='about-personal'>
                {
                  personals.map(item => {
                    return (
                      <Link
                        key={item.key} 
                        to={{ pathname: item.linkTo }} 
                        className='item'
                        target="_blank">
                          <div style={{backgroundImage: item.style }}></div>
                          {item.key}
                      </Link>
                    )
                  })
                }
              </div>
            </div>
          </SectionProfile>

          <SectionProfile sectionTitle='hobbies'>
            <div className='about-hobbies'>
              <div className='about-hobby'>
                {
                  hobbies.map((item, itemindex) => {
                    return <div key={itemindex} className='item'>{item}</div>
                  })
                }
              </div>
            </div>
          </SectionProfile>
        </div>

        <div className='about-me-content' style={{background: ''}}>
          <SectionProfile sectionTitle='profile'>
            {
              summary.map((item, ind) => <p key={ind}>{item}</p>)
            }
          </SectionProfile>

          <SectionProfile sectionTitle='skills'>
            <div className='about-skills'>
              <div className='about-skill'>
                {
                  skills.map((item, itemIndex) => {
                    return (
                      <div
                        className='item'
                        key={itemIndex}>
                        <span>{item.skillname}</span>
                        <div></div>
                      </div>
                    )
                  })
                }
              </div>
            </div>
          </SectionProfile>

          <SectionProfile sectionTitle='experiences'>
            <div className='about-experiences'>
              <div className="about-experience">
                {
                  experiences.map((item, itemIndex) => {
                    let styleLeft = itemIndex % 2 === 0? 'left' : 'right';

                    return (
                      <div className={`item ${styleLeft}`} key={itemIndex}>
                        <div className="content">
                          <h3>{item.jobrole} @<span>{item.company}</span></h3>
                          {/* <p>{item.jobstart.split(' ')[0]}</p> */}
                          <p>{item.jobstart} - {item.jobend}</p>
                          {
                            item.description.map((itemdesc, itemIndex) => {
                              return <span key={itemIndex}>{itemdesc}</span>
                            })
                          }
                        </div>
                        <div work-duration={item.jobstart.split(' ')[1]}></div>
                      </div>
                    );
                  })
                }
              </div>
            </div>
          </SectionProfile>
          
          <SectionProfile sectionTitle='education'>
            <div className='about-educations'>
              <div className='about-education'>
                {
                  educations.map((item, itemIndex) => {
                    return (
                      <div
                        className='item'
                        key={itemIndex}>
                        <div>{item.enddate.split(' ')[1]}</div>
                        <div>
                          <p>{item.institution}</p>

                          <div>
                            <span>{item.degree}</span>
                            <span>{item.startdate} - {item.enddate}</span>
                          </div>
                        </div>
                      </div>
                    )
                  })
                }
              </div>
            </div>
          </SectionProfile>
        </div>
      </div>
    </>
  )
}

const SectionProfile = ({sectionTitle, children}) => {
  return (
    <section>
      <div className={`${sectionTitle} section-head`}>
        {sectionTitle}
      </div>

      <div className={`${sectionTitle} section-body`}>
        {children}
      </div>
    </section>
  )
}

export default Aboutpage