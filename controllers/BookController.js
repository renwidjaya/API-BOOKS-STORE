const books = require("../models/books");

const getAllData = (req, res) => {
  try {
    const databaru = books;
    if (databaru.length === 0) {
      return res.json({
        status: "failed",
        message: "Data Tidak Ditemukan",
        data: [],
      });
    }
    return res.json({
      status: "Success",
      message: "Berhasil Menampilkan Data",
      data: books,
    });
  } catch (error) {
    res.json({
      status: "failed",
      message: error,
      data: [],
    });
  }
};

const getDataById = (req, res) => {
  try {
    const idBooks = req.params.id;
    const filterData = books.filter((i) => i.id === parseInt(idBooks));
    if (filterData.length === 0) {
      return res.json({
        status: "failed",
        message: "Data Tidak Ditemukan",
        data: [],
      });
    }
    return res.json({
      status: "Success",
      message: "Berhasil Menampilkan Data",
      data: filterData,
    });
  } catch (error) {
    res.json({
      status: "failed",
      message: error,
      data: [],
    });
  }
};

const getDataByJenis = (req, res) => {
  try {
    const jenis = req.params.jenis;
    let dataBaru = [];
    books.find((i) => {
      if (i.type === jenis) {
        dataBaru.push({
          id: i.id,
          name: i.name,
          type: i.type,
        });
      }
    });
    if (dataBaru.length === 0) {
      return res.json({
        status: "failed",
        message: "Data Tidak Ditemukan",
        data: [],
      });
    }
    return res.json({
      status: "Success",
      message: "Berhasil Menampilkan Data",
      data: dataBaru,
    });
  } catch (error) {
    res.json({
      status: "failed",
      message: error,
      data: [],
    });
  }
};

const updateDataById = (req, res) => {
  try {
    const idBooks = req.params.id;
    const nameBook = req.body.name;
    let dataBaru = [];
    books.map((i) => {
      if (i.id !== parseInt(idBooks)) {
        dataBaru.push({
          id: i.id,
          name: i.name,
          type: i.type,
        });
      } else {
        dataBaru.push({
          id: i.id,
          name: nameBook,
          type: i.type,
        });
      }
    });
    if (dataBaru.length === 0) {
      return res.json({
        status: "failed",
        message: "Data Tidak Ditemukan",
        data: [],
      });
    }
    return res.json({
      status: "Success",
      message: "Berhasil Mengubah Data",
      data: dataBaru,
    });
  } catch (error) {
    res.json({
      status: "failed",
      message: error,
      data: [],
    });
  }
};

const postData = (req, res) => {
  try {
    const idBooks = books.length + 1;
    const nameBook = req.body.name;
    const typeBook = req.body.type;
    let dataBaru = books;
    if (dataBaru.length === 0) {
      return res.json({
        status: "failed",
        message: "data tidak ditemukan",
        data: [],
      });
    }
    dataBaru.push({
      id: idBooks,
      name: nameBook,
      type: typeBook,
    });
    return res.json({
      status: "Success",
      message: "Berhasil Membuat Data",
      data: dataBaru,
    });
  } catch (error) {
    res.json({
      status: "failed",
      message: error,
      data: [],
    });
  }
};

const deleteDataById = (req, res) => {
  try {
    const idBooks = req.params.id;
    let dataBaru = [];
    books.map((i) => {
      if (i.id !== parseInt(idBooks)) {
        dataBaru.push({
          id: i.id,
          name: i.name,
          type: i.type,
        });
      }
    });
    if (dataBaru.length === 0) {
      return res.json({
        status: "failed",
        message: "Data Tidak Ditemukan",
        data: [],
      });
    }
    return res.json({
      status: "Success",
      message: "Berhasil Menghapus Data",
      data: dataBaru,
    });
  } catch (error) {
    res.json({
      status: "failed",
      message: error,
      data: [],
    });
  }
};

module.exports = {
  getAllData,
  getDataById,
  getDataByJenis,
  updateDataById,
  postData,
  deleteDataById,
};
