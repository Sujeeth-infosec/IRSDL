"use client";
import axios from "axios";
import { useParams } from "next/navigation";
import React, { useEffect, useState } from "react";

function EditCourse() {
  const { courseId } = useParams();
  const [loading, setLoading] = useState(false);
  console.log(courseId);

  useEffect(() => {
    GetCourseInfo;
  }, []);

  const GetCourseInfo = async () => {
    setLoading(true);
    const result = await axios.get("/api/courses?courseId=" + courseId);
    console, log(result.data);
    setLoading(false);
  };
  return <div>EditCourse</div>;
}

export default EditCourse;
