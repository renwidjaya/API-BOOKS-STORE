/**
 * @author Rendi Widjaya
 */
const books = require("../models/books");

/**
 * @error Response
 * @param {*} res
 * @param {*} error
 */
const handleErrorResponse = (res, error) => {
  res.json({
    status: "failed",
    message: error,
    data: [],
  });
};

/**
 * @books index
 * @param {*} req
 * @param {*} res
 * @returns
 */
const booksIndex = (req, res) => {
  try {
    const dataBaru = books;

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
      data: books,
    });
  } catch (error) {
    handleErrorResponse(res, error);
  }
};

/**
 * @book BY ID
 * @param {*} req
 * @param {*} res
 * @returns
 */
const bookById = (req, res) => {
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
    handleErrorResponse(res, error);
  }
};

/**
 * @book BY JENIS
 * @param {*} req
 * @param {*} res
 * @returns
 */
const bookByJenis = (req, res) => {
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
    handleErrorResponse(res, error);
  }
};

/**
 * @book UPDATE
 * @param {*} req
 * @param {*} res
 * @returns
 */
const bookUpdate = (req, res) => {
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
    handleErrorResponse(res, error);
  }
};

/**
 * @book STORE
 * @param {*} req
 * @param {*} res
 * @returns
 */
const bookStore = (req, res) => {
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
    handleErrorResponse(res, error);
  }
};

/**
 * @book DESTROY
 * @param {*} req
 * @param {*} res
 * @returns
 */
const bookDestroy = (req, res) => {
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
    handleErrorResponse(res, error);
  }
};

/**
 * @export MODULE
 */
module.exports = {
  booksIndex,
  bookById,
  bookByJenis,
  bookUpdate,
  bookStore,
  bookDestroy,
};
