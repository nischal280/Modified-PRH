import React from "react";
import Navbar from "../../components/Navbar/Navbar";
import Footer from "../../components/Footer/Footer";
import Card from "../../components/Card/Card";
import "./CommitteePage.css";
import { members } from "../../assets/data/members";

const CommitteePage = () => {
  return (
    <>
      <Navbar />

      <div className="member-container">
        <div className="cardBox">
          <h2 className="committee-top">Advisor</h2>
          <div className="team">
            {members.map((member) => {
              if (member.team === "advise") {
                return (
                  <div key={member.id}>
                    <Card
                      name={member.name}
                      src={member.src}
                      title={member.title}
                      linkedin={member.linkedin}
                      facebook={member.facebook}
                      instagram={member.instagram}
                      snapchat={member.snapchat}
                      tiktok={member.tiktok}
                      x={member.x}
                      github={member.github}
                    />
                  </div>
                );
              }
              return null;
            })}
          </div>
        </div>
        <div className="cardBox">
          <h2 className="committee-top">Coordinator</h2>
          <div className="team">
            {members.map((member) => {
              if (member.team === "coordinate") {
                return (
                  <div key={member.id}>
                    <Card
                      name={member.name}
                      src={member.src}
                      title={member.title}
                      linkedin={member.linkedin}
                      facebook={member.facebook}
                      instagram={member.instagram}
                      snapchat={member.snapchat}
                      tiktok={member.tiktok}
                      x={member.x}
                      github={member.github}
                    />
                  </div>
                );
              }
              return null;
            })}
          </div>
        </div>
         
         <div className="cardBox">
          <h2 className="committee-top">Vice Coordinator</h2>
          <div className="team">
            {members.map((member) => {
              if (member.team === "vice-coordinate") {
                return (
                  <div key={member.id}>
                    <Card
                      name={member.name}
                      src={member.src}
                      title={member.title}
                      linkedin={member.linkedin}
                      facebook={member.facebook}
                      instagram={member.instagram}
                      snapchat={member.snapchat}
                      tiktok={member.tiktok}
                      x={member.x}
                      github={member.github}
                    />
                  </div>
                );
              }
              return null;
            })}
          </div>
        </div>

        <div className="cardBox">
          <h2 className="committee-header">Treasurer</h2>
          <div className="team">
            {members.map((member) => {
              if (member.team === "treasurer") {
                return (
                  <div key={member.id}>
                    <Card
                      name={member.name}
                      src={member.src}
                      title={member.title}
                      linkedin={member.linkedin}
                      facebook={member.facebook}
                      instagram={member.instagram}
                      snapchat={member.snapchat}
                      tiktok={member.tiktok}
                      x={member.x}
                    />
                  </div>
                );
              }
              return null;
            })}
          </div>
        </div>

        <div className="cardBox">
          <h2 className="committee-header">Project Manager</h2>
          <div className="team">
            {members.map((member) => {
              if (member.team === "manage") {
                return (
                  <div key={member.id}>
                    <Card
                      name={member.name}
                      src={member.src}
                      title={member.title}
                      linkedin={member.linkedin}
                      facebook={member.facebook}
                      instagram={member.instagram}
                      snapchat={member.snapchat}
                      tiktok={member.tiktok}
                      x={member.x}
                    />
                  </div>
                );
              }
              return null;
            })}
          </div>
        </div>

        <div className="cardBox">
          <h2 className="committee-header">Business Team</h2>
          <div className="team">
            {members.map((member) => {
              if (member.team === "Business") {
                return (
                  <div key={member.id}>
                    <Card
                      name={member.name}
                      src={member.src}
                      title={member.title}
                      linkedin={member.linkedin}
                      facebook={member.facebook}
                      instagram={member.instagram}
                      snapchat={member.snapchat}
                      tiktok={member.tiktok}
                      x={member.x}
                    />
                  </div>
                );
              }
              return null;
            })}
          </div>
        </div>

        <div className="cardBox">
          <h2 className="committee-header">Exhibition Team</h2>
          <div className="team">
            {members.map((member) => {
              if (member.team === "Exhibition") {
                return (
                  <div key={member.id}>
                    <Card
                      name={member.name}
                      src={member.src}
                      title={member.title}
                      linkedin={member.linkedin}
                      facebook={member.facebook}
                      instagram={member.instagram}
                      snapchat={member.snapchat}
                      tiktok={member.tiktok}
                      x={member.x}
                    />
                  </div>
                );
              }
              return null;
            })}
          </div>
        </div>

        <div className="cardBox">
          <h2 className="committee-header">PR and Marketing Team</h2>
          <div className="team">
            {members.map((member) => {
              if (member.team === "PR and Marketing") {
                return (
                  <div key={member.id}>
                    <Card
                      name={member.name}
                      src={member.src}
                      title={member.title}
                      linkedin={member.linkedin}
                      facebook={member.facebook}
                      instagram={member.instagram}
                      snapchat={member.snapchat}
                      tiktok={member.tiktok}
                      x={member.x}
                    />
                  </div>
                );
              }
              return null;
            })}
          </div>
        </div>

        <div className="cardBox">
          <h2 className="committee-header">Finance Team</h2>
          <div className="team">
            {members.map((member) => {
              if (member.team === "Finance") {
                return (
                  <div key={member.id}>
                    <Card
                      name={member.name}
                      src={member.src}
                      title={member.title}
                      linkedin={member.linkedin}
                      facebook={member.facebook}
                      instagram={member.instagram}
                      snapchat={member.snapchat}
                      tiktok={member.tiktok}
                      x={member.x}
                    />
                  </div>
                );
              }
              return null;
            })}
          </div>
        </div>

        <div className="cardBox">
          <h2 className="committee-header">Graphics Team</h2>
          <div className="team">
            {members.map((member) => {
              if (member.team === "Graphics") {
                return (
                  <div key={member.id}>
                    <Card
                      name={member.name}
                      src={member.src}
                      title={member.title}
                      linkedin={member.linkedin}
                      facebook={member.facebook}
                      instagram={member.instagram}
                      snapchat={member.snapchat}
                      tiktok={member.tiktok}
                      x={member.x}
                    />
                  </div>
                );
              }
              return null;
            })}
          </div>
        </div>
      </div>

      <Footer />
    </>
  );
};

export default CommitteePage;
