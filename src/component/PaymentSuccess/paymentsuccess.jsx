import React from 'react';
// import { Card } from '@/components/ui/card';
import TaskAltIcon from '@mui/icons-material/TaskAlt';
import { green } from '@mui/material/colors';

const PaymentSuccess = () => {
  return (
    <Card className="min-h-screen px-5 py-10 border-5">
      <Card className="flex flex-col items-center justify-center h-[90vh]">
        <div className="box w-full lg:w-1/4 flex flex-col items-center rounded-md">
          <TaskAltIcon sx={{ fontSize: '5rem', color: green[500] }} />
          <h1 className="py-5 text-2xl font-semibold">Order Success!</h1>
        </div>
      </Card>
    </Card>
  );
};

export default PaymentSuccess;
